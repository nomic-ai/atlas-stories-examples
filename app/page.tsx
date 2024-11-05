import Image from "next/image";
import { Scrollyteller } from "atlas-stories-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 pt-20">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Post Title</h1>
        <p className="text-lg leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
        <p className="text-lg leading-relaxed">
          Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
          enim est eleifend mi, non fermentum diam nisl sit amet erat.
        </p>
      </div>
    </div>
  );
}
