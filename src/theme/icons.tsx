import { IconifyIcon } from '@iconify/react';
import folder from '@iconify/icons-mdi/folder';
import settings from '@iconify/icons-mdi/cog-outline';
import trash from '@iconify/icons-mdi/delete';
import edit from '@iconify/icons-clarity/note-edit-line';
import arrowRight from '@iconify/icons-ic/outline-keyboard-arrow-right';
import sync from '@iconify/icons-ic/baseline-sync';
import arrowBack from '@iconify/icons-ic/round-arrow-back';
import plus from '@iconify/icons-ant-design/plus-outlined';
import github from '@iconify/icons-ant-design/github-filled';
import search from '@iconify/icons-ant-design/search-outlined';

type TIcons = Record<string, IconifyIcon>;

const icons: TIcons = {
  folder,
  settings,
  trash,
  edit,
  arrowRight,
  sync,
  arrowBack,
  plus,
  github,
  search,
};

export default icons;
