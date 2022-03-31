const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(
        new Array(10000).fill(0).map((_, i) => {
          return {
            id: i,
            name: `name${i}`,
            email: `email${i}@example.com`,
            age: i,
          };
        })
      );
    }, 300);
  });
};

export { fetchUsers };
