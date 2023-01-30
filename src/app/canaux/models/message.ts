import { messageI } from '../interfaces/message-i';

export class message implements messageI {
  user!: 'Anonymous';
  content!: string;
  canalId!: string;
  date!: string;
  id!: string;

  constructor(obj?: Partial<message>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
