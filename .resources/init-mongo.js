function seed(dbName, user, password) {
  db = db.getSiblingDB(dbName);
  db.createUser({
    user: user,
    pwd: password,
    roles: [{ role: 'readWrite', db: dbName }],
  });
}

seed('all_in_one_english-db', 'all_in_one_english-db-user', 'changeit');
seed('all_in_one_english-test-db', 'all_in_one_english-test-db-user', 'changeit');
