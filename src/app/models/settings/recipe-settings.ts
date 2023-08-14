import { SelectItem } from 'primeng/api';

import { Rational } from '../rational';
import { BeaconRationalSettings, BeaconSettings } from './beacon-settings';

export interface RecipeSettings {
  excluded?: boolean;
  checked?: boolean;
  machineId?: string;
  fuelId?: string;
  /** Calculated, not configurable */
  fuelOptions?: SelectItem<string>[];
  machineModuleIds?: string[];
  /** Calculated, not configurable */
  machineModuleOptions?: SelectItem<string>[];
  beacons?: BeaconSettings[];
  overclock?: number;
  cost?: string;
}

export class RecipeSettingsRational {
  excluded?: boolean;
  checked?: boolean;
  machineId?: string;
  fuelId?: string;
  /** Calculated, not configurable */
  fuelOptions?: SelectItem<string>[];
  machineModuleIds?: string[];
  /** Calculated, not configurable */
  machineModuleOptions?: SelectItem<string>[];
  beacons?: BeaconRationalSettings[];
  overclock?: Rational;
  cost?: Rational;

  constructor(obj: RecipeSettings) {
    if (obj.excluded != null) {
      this.excluded = obj.excluded;
    }

    if (obj.checked != null) {
      this.checked = obj.checked;
    }

    if (obj.machineId != null) {
      this.machineId = obj.machineId;
    }

    if (obj.fuelId != null) {
      this.fuelId = obj.fuelId;
    }

    if (obj.fuelOptions != null) {
      this.fuelOptions = obj.fuelOptions;
    }

    if (obj.machineModuleIds != null) {
      this.machineModuleIds = obj.machineModuleIds;
    }

    if (obj.machineModuleOptions != null) {
      this.machineModuleOptions = obj.machineModuleOptions;
    }

    if (obj.beacons) {
      this.beacons = obj.beacons.map((b) => new BeaconRationalSettings(b));
    }

    if (obj.overclock != null) {
      this.overclock = Rational.fromNumber(obj.overclock);
    }

    if (obj.cost != null) {
      this.cost = Rational.fromString(obj.cost);
    }
  }
}
