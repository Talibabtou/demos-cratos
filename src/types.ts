import type { APP_ROLES } from '@/constants';
import type {
  NOTE_CHANGE_KIND,
  NOTE_CHANGE_STATUS,
} from '@/features/constitution-reader/constants';

type ValueOf<T> = T[keyof T];

export type AppRole = (typeof APP_ROLES)[number];
export type NoteChangeKind = ValueOf<typeof NOTE_CHANGE_KIND>;
export type NoteChangeRequestStatus = ValueOf<typeof NOTE_CHANGE_STATUS>;
