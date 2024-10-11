import { writable } from 'svelte/store';

export const projectStore = writable({
  title: '',
  bio: '',
  tags: [],
  country: '',
  details: '',
  email: '',
  portfolio: '',
  github: '',
  linkedin: '',
  twitter: '',
  website: '',
  other: '',
  funding_goal: '',
  bank_acct: '',
  wallet_address: ''
});