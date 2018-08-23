export namespace SunSingleton {
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
