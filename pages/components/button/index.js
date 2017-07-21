export default {
  onSubmit () {
    const { data, dispatch } = this;
    const { button, actions } = data;

    if (button.disable || button.loading) {
      return this;
    }

    dispatch({
      type: actions.LIST_SUBMIT
    });
  }
}