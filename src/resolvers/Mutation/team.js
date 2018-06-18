const { getUserId } = require('../../utils');

const team = {
  async createTeam(parent, { name }, ctx, info) {
    // const userId = getUserId(ctx);

    return ctx.db.mutation.createTeam(
      {
        data: {
          name
        }
      },
      info
    );
  }
};

module.exports = { team };
