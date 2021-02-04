const actions = {
  REGISTER: 'REGISTER',

  register: (data, resolve, reject) => ({
    type: actions.REGISTER,
    data,
    resolve,
    reject,
  }),
};

export default actions;
