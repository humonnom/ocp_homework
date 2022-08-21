import { birdSpeak } from "./main";
import Duck from "./duck";
import Pigeon from "./pigeon";

describe("birdSpeak test", function () {
  test("duck", () => {
    expect(birdSpeak(new Duck())).toBe("duck duck");
  });

  test("pigeon", () => {
    expect(birdSpeak(new Pigeon())).toBe("goo goo");
  });
});

/**
 * ocp:
 * 다른 종류의 bird 클래스를 생성하고자 할때 기존의 코드를 수정하지 않고 추가할 수 있음.
 * 수정없이 확장 가능하기 때문에 ocp를 지키고 있다고 볼 수 있음.
 */
