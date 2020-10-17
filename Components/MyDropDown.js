import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import {
  rowCountSelector,
  selectedLabelSelector,
} from "../state/reducers/rootReducer";

function MyDropDown({ setSelectedSize }) {
  const selectedLabel = useSelector(selectedLabelSelector);

  const handleMenuClick = (e) => {
    const { label, value } = e.item.props;
    setSelectedSize({ label, value, rowCount: value / 3 });
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" label="6 pairs" value={6}>
        6 pairs
      </Menu.Item>
      <Menu.Item key="2" label="8 pairs" value={8}>
        8 pairs
      </Menu.Item>
      <Menu.Item key="3" label="10 pairs" value={10}>
        10 pairs
      </Menu.Item>
      <Menu.Item key="4" label="12 pairs" value={12}>
        12 pairs
      </Menu.Item>
      <Menu.Item key="5" label="15 pairs" value={15}>
        15 pairs
      </Menu.Item>
      <Menu.Item key="6" label="18 pairs" value={18}>
        18 pairs
      </Menu.Item>
      <Menu.Item key="7" label="21 pairs" value={21}>
        21 pairs
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button style={{ width: "200px" }}>
        {selectedLabel} <DownOutlined />
      </Button>
    </Dropdown>
  );
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    selectedSize: state.data.selectedSize,
    selectedLabel: state.data.selectedLabel,
    rowCount: rowCountSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedSize: (size) =>
      dispatch({ type: "SET_SELECTED_SIZE", payload: size }),
  };
};

export default connect(null, mapDispatchToProps)(MyDropDown);
