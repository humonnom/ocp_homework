import Bird from "./bird";

class Duck implements Bird {
  speak(): string {
    return "duck duck";
  }
}

export default Duck;
