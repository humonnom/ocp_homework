import Bird from "./bird";

class Pigeon implements Bird {
  speak(): string {
    return "goo goo";
  }
}

export default Pigeon;
