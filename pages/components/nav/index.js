export default {
  onTabbarTap (event) {
    const { dispatch } = this;

    dispatch({
      type: 'TABBAR_NEW_SELECT'
    });
  }
}