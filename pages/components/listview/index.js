export default {
  onItemTap (event) {
    const { dispatch, data } = this;
    const { actions } = data;
    const dataset = event.currentTarget.dataset;
    const { itemid, listid } = dataset;

    dispatch({
      type: actions.ITEM_SELECT,
      itemid,
      listid
    });
  }
}