function showToUser(data) {
  data.map(({ title, upvotes, score, num_comments, created }) => {
    return {
      title,
      upvotes,
      score,
      num_comments,
      created
    };
  });
}
export default showToUser;
