import { CanalI } from '../interfaces/canal-i';

export class canal implements CanalI {
  name!: 'Général';
  id!: number;

  constructor(obj?: Partial<canal>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
