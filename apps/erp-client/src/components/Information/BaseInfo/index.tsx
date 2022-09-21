import { Descriptions, Image } from 'antd';
import moment from 'moment';
import React from 'react';
interface baseInfoProps {
  extra: Element;

  infoList: {
    title: string;
    descriptions: {
      label: string;
      span: number;
      render: any;
      type: string;
      value: Element;
    }[];
    bordered: boolean;
    column: number | {};
    layout: 'horizontal' | 'vertical';
    size: 'default' | 'middle' | 'small';
    style?: CSSConditionRule;
  };
}
const BaseInfo: React.FC<baseInfoProps> = (props) => {
  const { infoList, extra } = props;
  const renderType = (type: string, value: any) => {
    let data;
    switch (type) {
      case 'date':
        data = moment(value).format('YYYY/MM/DD');

        break;
      case 'boolean':
        data = value ? '是' : '否';
        break;

      case 'image':
        data = (
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        );

        break;
      default:
        data = value;
        break;
    }
    return data;
  };

  const renderList = () => {
    return (
      <Descriptions
        layout={infoList?.layout}
        extra={extra}
        size={infoList?.size}
        bordered={infoList?.bordered}
        column={infoList?.column}
        contentStyle={{ minWidth: 100, maxWidth: 300 }}
        style={{
          ...infoList?.style,
          marginBottom: 20,
        }}
        labelStyle={{
          width: 100,
          textAlign: 'center',
        }}
      >
        {infoList?.descriptions?.map((item) => {
          return (
            <Descriptions.Item label={item.label} span={item.span}>
              {item.render
                ? item.render()
                : item.type
                ? renderType(item.type, item.value)
                : item.value || '-'}
            </Descriptions.Item>
          );
        })}
      </Descriptions>
    );
  };
  return renderList();
};
export default BaseInfo;
