import { client } from './client';

export async function updateTreasure(treasure, id) {
  const { data, error } = await client.from('treasure').update(treasure).match({ id: id }).single();

  return data;
}

export async function getTreasures() {
  const { data, error } = await client.from('treasure').select('*');

  return data;
}

export async function getTreasureById(id) {
  const { data, error } = await client.from('treasure').select('*').match({ id }).single();

  return data;
}

export async function signIn(email, password) {
  const { user, error } = await client.auth.signIn({
    email: email,
    password: password,
  });

  if (error) {
    console.error(error);
    throw error;
  } else {
    return user;
  }
}

export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error(error);
    throw error;
  } else {
    return user;
  }
}
