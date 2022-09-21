import { Col, DatePicker, Form, Input, Row, Select, Tag } from 'antd';

export const infoOfList = {
  bordered: true,
  infoType: 'list',
  layout: 'horizontal',
  size: 'small',
  column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
  descriptions: [
    {
      label: '业务名称',
      // type: 'image',
      value:
        'https://zfztrade.oss-cn-hangzhou.aliyuncs.com/737fb3401c2a45cbbcc4621d89e89b56.jpeg/https://zfztrade.oss-cn-hangzhou.aliyuncs.com/737fb3401c2a45cbbcc4621d89e89b56.jpeg/https://zfztrade.oss-cn-hangzhou.aliyuncs.com/737fb3401c2a45cbbcc4621d89e89b56.jpeg/https://zfztrade.oss-cn-hangzhou.aliyuncs.com/737fb3401c2a45cbbcc4621d89e89b56.jpeg',
      span: 2,
    },
    { label: '意向进度', value: '', span: 1 },
    { label: '报送方式', value: 'label', span: 1 },
    { label: '是否分期付款', type: 'boolean', value: true, span: 1 },
    { label: '客户名称', value: 'label', span: 1 },
    { label: '创建时间', value: 'label', span: 1 },
    { label: '客户名称', value: 'label', span: 1 },
    { label: '案件总额', value: 'label', span: 1 },
    { label: '客户是否要求', value: 'label', span: 1 },
    {
      label: '来源渠道',
      value: [2, 3, 4, 5, 6],
      span: 2,
      render: () => {
        return [2, 3, 4, 5, 6]?.map((item) => <Tag>{item}</Tag>);
      },
    },
    { label: '创建人', value: 'label', span: 1 },
    { label: '关联线索', value: 'label', span: 1 },
    { label: '活动类型', value: 'label', span: 1 },
    { label: '客户要求处理时间', type: 'date', value: '2012-12-12  12:15:45', span: 1 },
    { label: '最后修改时间', type: 'date', value: '2012-12-12 12:15:45', span: 1 },
    { label: '关联合同', value: 'label', span: 1 },
    { label: '优惠码', value: 'label', span: 1 },
    { label: '客户要求', value: 'label', span: 1 },
    { label: '修改人', value: 'label', span: 1 },
  ],
  // },
};

export const renderForm = () => {
  return (
    <Form layout="vertical" hideRequiredMark>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter user name' }]}
          >
            <Input placeholder="Please enter user name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="url"
            label="Url"
            rules={[{ required: true, message: 'Please enter url' }]}
          >
            <Input
              style={{ width: '100%' }}
              addonBefore="http://"
              addonAfter=".com"
              placeholder="Please enter url"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="owner"
            label="Owner"
            rules={[{ required: true, message: 'Please select an owner' }]}
          >
            <Select placeholder="Please select an owner">
              <Select.Option value="xiao">Xiaoxiao Fu</Select.Option>
              <Select.Option value="mao">Maomao Zhou</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: 'Please choose the type' }]}
          >
            <Select placeholder="Please choose the type">
              <Select.Option value="private">Private</Select.Option>
              <Select.Option value="public">Public</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="approver"
            label="Approver"
            rules={[{ required: true, message: 'Please choose the approver' }]}
          >
            <Select placeholder="Please choose the approver">
              <Option value="jack">Jack Ma</Option>
              <Option value="tom">Tom Liu</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="dateTime"
            label="DateTime"
            rules={[{ required: true, message: 'Please choose the dateTime' }]}
          >
            <DatePicker.RangePicker
              style={{ width: '100%' }}
              getPopupContainer={(trigger) => trigger.parentElement!}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'please enter url description',
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="please enter url description" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
