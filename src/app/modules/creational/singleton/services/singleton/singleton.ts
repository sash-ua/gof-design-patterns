export function singleton() {
  const sun1 = SunSingleton.SunInstance;
  const sun2 = SunSingleton.SunInstance;
  // console.log('sun1 === sun2', sun1 === sun2);
  // console.log(sun1.shining());
  // console.log(sun2.shining());
}

namespace SunSingleton {
  interface Sun {
    luminosity: number;

    shining(): number;
  }

  class Sun implements Sun {
    luminosity = 0;

    shining(): number {
      return this.luminosity++;
    }
  }

  export const SunInstance: Sun = new Sun();
}
