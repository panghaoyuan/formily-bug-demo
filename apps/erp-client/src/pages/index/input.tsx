import React, { useState } from "react";
import { Select, Modal, Table, Input } from "antd";
import type { SelectProps } from "antd";
import { connect, mapReadPretty } from "@formily/react";
import { PreviewText } from "@formily/antd";
export interface ProSelectTableProps extends SelectProps {
  borderRadius?: number;
  onChange?: (string: string) => void;
}

const Component: React.FC<ProSelectTableProps> = (props) => {
  const { onChange } = props;
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div>
      <Select
        {...props}
        mode="tags"
        onClick={() => setVisible(true)}
        dropdownStyle={{
          display: "none",
        }}
      ></Select>
      <Modal open={visible} onCancel={() => setVisible(false)} footer={null}>
        <Input />
        <Table
          columns={[
            {
              title: "xxxx",
              dataIndex: "name",
              render: (_text, _record, index) => {
                return <div>#{index}</div>;
              },
            },
            { title: "xxxx", dataIndex: "name" },
            { title: "xxxx", dataIndex: "type" },
          ]}
          dataSource={[
            { name: "xxxx", type: "xxxx" },
            { name: "xxxx", type: "xxxx" },
            { name: "xxxx/xxxx", type: "xxxx" },
            { name: "xxxx", type: "xxxx" },
            { name: "xxxx", type: "xxxx" },
            { name: "xxxx", type: "xxxx" },
          ]}
          onRow={(record) => {
            return {
              onDoubleClick: () => {
                onChange?.(record.name);
                setVisible(false);
              },
            };
          }}
        />
      </Modal>
    </div>
  );
};

export const SelectTable = connect(
  Component,
  mapReadPretty(PreviewText.Select)
);

export default SelectTable;
