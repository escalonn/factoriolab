import { Entities } from '../entities';
import { EnergyType } from '../enum';
import { Rational } from '../rational';
import { ModuleEffect } from './module';
import { Silo, SiloRational } from './silo';

export interface Machine {
  /** If undefined, speed is based on belt speed */
  speed?: number | string;
  modules?: number;
  disallowedEffects?: ModuleEffect[];
  type?: EnergyType;
  /** Fuel categories, e.g. chemical or nuclear */
  fuelCategories?: string[];
  /** Energy consumption in kW */
  usage?: number | string;
  /** Drain in kW */
  drain?: number | string;
  /** Pollution in #/m */
  pollution?: number | string;
  silo?: Silo;
  consumption?: Entities<number | string>;
}

export class MachineRational {
  /** If undefined, speed is based on belt speed */
  speed?: Rational;
  modules?: number;
  disallowedEffects?: ModuleEffect[];
  type?: EnergyType;
  /** Fuel categories, e.g. chemical or nuclear */
  fuelCategories?: string[];
  /** Energy consumption in kW */
  usage?: Rational;
  drain?: Rational;
  pollution?: Rational;
  silo?: SiloRational;
  consumption?: Entities<Rational>;

  constructor(obj: Machine) {
    if (obj.speed) {
      this.speed = Rational.from(obj.speed);
    }

    if (obj.modules != null) {
      this.modules = Math.round(obj.modules);
    }

    if (obj.disallowedEffects) {
      this.disallowedEffects = obj.disallowedEffects;
    }

    if (obj.type != null) {
      this.type = obj.type;
    }

    if (obj.usage != null) {
      this.usage = Rational.from(obj.usage);
    }

    if (obj.fuelCategories) {
      this.fuelCategories = obj.fuelCategories;
    }

    if (obj.drain != null) {
      this.drain = Rational.from(obj.drain);
    }

    if (obj.pollution != null) {
      this.pollution = Rational.from(obj.pollution);
    }

    if (obj.silo) {
      this.silo = new SiloRational(obj.silo);
    }

    if (obj.consumption) {
      const consumption = obj.consumption;
      this.consumption = Object.keys(consumption).reduce(
        (e: Entities<Rational>, i) => {
          e[i] = Rational.from(consumption[i]);
          return e;
        },
        {}
      );
    }
  }
}
