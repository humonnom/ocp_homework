import "dotenv/config";
import Bird from "./bird";
import Pigeon from "./pigeon";
import Duck from "./duck";

function main() {
  let bird: Bird;

  switch (process.env.BIRD) {
    case "duck":
      bird = new Duck();
      break;
    case "pigeon":
      bird = new Pigeon();
      break;
    default:
      throw new Error("🦃🐔🕊️🦆🦅🚫");
  }

  birdSpeak(bird);
}

export function birdSpeak(bird: Bird): string {
  return bird.speak();
}

main();
