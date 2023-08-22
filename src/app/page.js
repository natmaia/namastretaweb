import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar active={"home"} />

      <main className="flex p-4">
        <div className="w-1/4">
          <img src="https://picsum.photos/200.webp" alt="imagem random" />
          <img src="https://picsum.photos/seed/picsum/200/250" alt="imagem random" />
          <img src="https://picsum.photos/200?grayscale" alt="imagem random" />
        </div>

        <div className="flex-grow p-4">
          <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae lorem non libero vehicula tempus. Quisque ullamcorper,
            sapien vitae eleifend varius, dui nisi faucibus tellus.
          </p>
        </div>

        <div className="w-1/4">
          <img src="https://picsum.photos/200.webp" alt="imagem random" />
          <img src="https://picsum.photos/seed/picsum/200/250" alt="imagem random" />
          <img src="https://picsum.photos/200?grayscale" alt="imagem random" />
        </div>
      </main>
    </>
  );
}
