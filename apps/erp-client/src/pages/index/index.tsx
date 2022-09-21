import React from 'react';
import { Card, Button  } from 'antd';
import { SelectTable } from '@zfz/formily-antd';
import { createForm, onFormReact } from '@formily/core';
import { createSchemaField, FormProvider } from '@formily/react';
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Cascader,
  DatePicker,
  FormGrid,
  ArrayItems,
  Editable,
  PreviewText,
  Radio,
  TimePicker,
  Select,
} from '@formily/antd';

import Input1 from './input';

const form = createForm({
  validateFirst: true,
  effects() {
    onFormReact((form) => {
      form.setFieldState('*', (state: any) => {
      });
    });
  },
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    Cascader,
    Select,
    ArrayItems,
    Editable,
    SelectTable,
    Radio,
    TimePicker,
    Input1,
  },
});

const schema = {
  type: 'object',
  properties: {
    grid: {
      type: 'void',
      'x-component': 'FormGrid',
      'x-component-props': {
        maxColumns: 3,
        minColumns: 2,
      },
      properties: {
        businessName: {
          type: 'string',
          title: '相对路径引入,可触发阅读态',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input1',
        },
        customerName: {
          type: 'string',
          title: '组件化引入,不可触发阅读态',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'SelectTable',
        },
        clue: {
          type: 'string',
          title: 'formily/antd 自带组件, 可触发阅读态',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Select',
        },
      },
    },
  },
};

const MarketDetail: React.FC = () => {
  return (
    <Card>
      <PreviewText.Placeholder value="-">
        <FormProvider form={form}>
          <Form layout="vertical" labelCol={6} wrapperCol={16} onAutoSubmit={console.log}>
            <SchemaField schema={schema} />
            <Button
              onClick={() => {
                form.setState((state) => {
                  state.editable = !state.editable;
                });
              }}
            >
              编辑 (点击触发阅读态)
            </Button>
          </Form>
        </FormProvider>
      </PreviewText.Placeholder>
    </Card>
  );
};
export default MarketDetail;
