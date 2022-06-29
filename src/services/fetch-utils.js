import { client } from './client';

export async function logout() {
  const { error } = await client.auth.signOut();
  return error;
}

export async function createTreasure(treasure) {
  const { data } = await client.from('treasure').insert(treasure).single();
  //   console.log(treasure);
  return data;
}

export async function deleteTreasure(id) {
  const { data } = await client.from('treasure').delete().match({ id: id }).single();

  return data;
}

export async function updateTreasure(treasure, id) {
  //   console.log(treasure, id);
  const { data } = await client.from('treasure').update(treasure).match({ id: id }).single();

  return data;
}

export async function getTreasures() {
  const { data } = await client.from('treasure').select('*');
  //   console.log(data);
  return data;
}

export async function getTreasureById(id) {
  const { data } = await client.from('treasure').select('*').match({ id }).single();

  return data;
}

export async function signIn(email, password) {
  const { user, error } = await client.auth.signIn({
    email: email,
    password: password,
  });

  if (error) {
    // console.error(error);
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
    // console.error(error);
    throw error;
  } else {
    return user;
  }
}
