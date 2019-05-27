function showToUser(data) {
  data.slice(0, 9).map(({ title, upvotes, score, num_comments, created }) => {
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
