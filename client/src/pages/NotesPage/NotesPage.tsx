import axios, { AxiosError } from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import CreateNoteModal from "../../components/CreateNoteModal/CreateNoteModal";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import NoteBody from "../../components/NoteBody/NoteBody";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export type NoteCardData = {
  _id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  color: string;
};

const Notes = () => {
  const navigate = useNavigate();
  const userToken: string = Cookies.get("userToken") as string;
  //
  !Cookies.get("userToken") && navigate("/login");
  const [notes, setNotes] = useState<NoteCardData[]>([]);
  const [loading, setLoading] = useState(false);

  async function getAllNotes() {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_PRODUCTION_API_LINK + "note",
        {
          headers: {
            Authorization:
              (import.meta.env.VITE_TOKEN_PREFIX as string) + " " + userToken,
          },
        }
      );
      setNotes(data.notes as NoteCardData[]);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    getAllNotes();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>Notes | oneNote</title>
      </Helmet>
      <Toaster />
      <section className="container mx-auto px-5 py-24 padding-top">
        <div className="justify-end flex p-5 gap-3">
          <CreateNoteModal getAllNotes={getAllNotes} />
        </div>

        <div className="container my-3 p-10 mx-auto ">
          {notes && notes.length ? (
            <div className="flex flex-wrap gap-3  ">
              {notes.map((note: NoteCardData) => (
                <NoteBody
                  note={note}
                  getAllNotes={getAllNotes}
                  key={note._id}
                />
              ))}
            </div>
          ) : (
            <div className="flex sm:text-[30px] text-indigo-900 md:text-4xl justify-center items-center text-center flex-col gap-3 font-medium">
              <p className="text-balance">
                No notes are available. <br /> Start creating new notes right
                now!
              </p>
              <CreateNoteModal getAllNotes={getAllNotes} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Notes;
