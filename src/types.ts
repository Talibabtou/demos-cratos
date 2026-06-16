import type {
  APP_ROLES,
  NOTE_CHANGE_KIND,
  NOTE_CHANGE_STATUS,
} from '@/constants';

type ValueOf<T> = T[keyof T];

export type AppRole = (typeof APP_ROLES)[number];
export type NoteChangeKind = ValueOf<typeof NOTE_CHANGE_KIND>;
export type NoteChangeRequestStatus = ValueOf<typeof NOTE_CHANGE_STATUS>;
