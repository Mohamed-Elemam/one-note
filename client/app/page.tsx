"use client"



export default function Home() {
  return (
    <main>
      <main className="container mx-auto px-5 py-24">
        <div className="grid md:grid-cols-2 sm:grid-col-1" items->
          <div>
            <h1 className="text-4xl font-bold mb-3">one Note</h1>
            <p className="text-grey-700 font-medium">
              where notes are **A place for great ideas. Notes is designed for
              whatever`s on your mind. Write down your thoughts.
            </p>
            <a
              href={"/signup"}
              className="inline-block px-4 py-2.5 my-3 font-semibold text-white bg-green-300 rounded-lg"
            >
              Get Started
            </a>
          </div>

          <div>
  {/* <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module" async></script>  */}

<video src="https://lottie.host/1c2e5a65-22b8-4f7c-ad16-01a456372a02/LO5ZcRPn0V.json"   loop ></video>
  </div>
          
        </div>
      </main>
    </main>
  );
}
