import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputHTMLAttributes, useState } from 'react';
import { Input } from '../packages';
import './input.css';

interface InputStoryProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'type' | 'placeholder'
  > {
  label?: string;
  initialValue?: string;
  type?: string;
  placeholder?: string;
}
const InputStory = ({
  type,
  label,
  placeholder,
  initialValue = '',
  ...props
}: InputStoryProps) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="input-container">
      <div className="input-group">
        <label className="input-label">{label}</label>
        <Input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          {...props}
        />
      </div>
    </div>
  );
};

const meta = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# VINGLE Design System - Input

VINGLE 디자인 시스템의 Input 컴포넌트입니다. HTML input 요소의 모든 속성을 지원하며, 접근성과 사용성을 고려하여 설계되었습니다.

## 특징

- **완전한 HTML Input 속성 지원**: 모든 HTML input 속성을 props로 전달 가능
- **접근성 고려**: ARIA 속성 및 키보드 네비게이션 지원
- **유연한 확장성**: 다양한 input 타입과 스타일링 지원

## 사용법

\`\`\`tsx
import Input from '@vingle/design-system/Input';

// 기본 사용법
<Input value="입력값" onChange={(e) => console.log(e.target.value)} />

// placeholder와 함께 사용
<Input 
  value="" 
  placeholder="검색어를 입력하세요" 
  onChange={(e) => setValue(e.target.value)} 
/>

// 다양한 input 타입
<Input type="email" value={email} placeholder="이메일을 입력하세요" />
<Input type="password" value={password} placeholder="비밀번호를 입력하세요" />
<Input type="number" value={age} placeholder="나이를 입력하세요" />
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | input의 값 (필수) |
| type | string | 'text' | input 타입 (text, email, password, number 등) |
| placeholder | string | - | placeholder 텍스트 |
| disabled | boolean | false | 비활성화 여부 |
| required | boolean | false | 필수 입력 여부 |
| ... | InputHTMLAttributes | - | 모든 HTML input 속성 지원 |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'input의 값',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'input 타입',
    },
    placeholder: {
      control: 'text',
      description: 'placeholder 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    required: {
      control: 'boolean',
      description: '필수 입력 여부',
    },
    readOnly: {
      control: 'boolean',
      description: '읽기 전용 여부',
    },
    maxLength: {
      control: 'number',
      description: '최대 입력 길이',
    },
    minLength: {
      control: 'number',
      description: '최소 입력 길이',
    },
    pattern: {
      control: 'text',
      description: '정규식 패턴',
    },
  },
  args: {
    value: '',
    type: 'text',
    placeholder: '텍스트를 입력하세요',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Input 스토리
export const Default: Story = {
  render: () => <InputStory placeholder="텍스트를 입력하세요" />,
};

// 값이 있는 Input
export const WithValue: Story = {
  render: () => (
    <InputStory placeholder="텍스트를 입력하세요" initialValue="빙글 Vingle" />
  ),
};

// 이메일 Input
export const Email: Story = {
  render: () => (
    <InputStory
      type="email"
      placeholder="이메일을 입력하세요"
      initialValue="user@vingle.com"
    />
  ),
};

// 비밀번호 Input
export const Password: Story = {
  render: () => (
    <InputStory
      type="password"
      placeholder="비밀번호를 입력하세요"
      initialValue="password123"
    />
  ),
};

// 숫자 Input
export const Number: Story = {
  render: () => (
    <InputStory
      type="number"
      placeholder="숫자를 입력하세요"
      initialValue="25"
      min={0}
      max={100}
    />
  ),
};

// 검색 Input
export const Search: Story = {
  render: () => (
    <InputStory
      type="search"
      placeholder="검색어를 입력하세요"
      initialValue="검색어"
    />
  ),
};

// 전화번호 Input
export const Telephone: Story = {
  render: () => (
    <InputStory
      type="tel"
      placeholder="전화번호를 입력하세요"
      initialValue="010-1234-5678"
      pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
    />
  ),
};

// URL Input
export const URL: Story = {
  render: () => (
    <InputStory
      type="url"
      placeholder="URL을 입력하세요"
      initialValue="https://vingle.com"
    />
  ),
};

// 비활성화된 Input
export const Disabled: Story = {
  render: () => (
    <InputStory
      placeholder="비활성화된 입력창"
      initialValue="비활성화된 입력값"
      disabled
    />
  ),
};

// 읽기 전용 Input
export const ReadOnly: Story = {
  render: () => <InputStory initialValue="읽기 전용 입력값" readOnly />,
};

// 필수 입력 Input
export const Required: Story = {
  render: () => <InputStory placeholder="필수 입력 항목입니다" required />,
};

// 최대 길이 제한 Input
export const WithMaxLength: Story = {
  render: () => (
    <InputStory
      initialValue="최대 10자"
      maxLength={10}
      placeholder="최대 10자까지 입력 가능"
    />
  ),
};

// 최소 길이 제한 Input
export const WithMinLength: Story = {
  render: () => (
    <InputStory
      initialValue=""
      minLength={5}
      placeholder="최소 5자 이상 입력해주세요"
    />
  ),
};

// 모든 Input 타입을 한번에 보여주는 스토리
export const AllInputTypes: Story = {
  render: () => (
    <div className="input-container">
      <InputStory
        label="기본 텍스트"
        placeholder="텍스트를 입력하세요"
        initialValue="일반 텍스트 입력"
      />
      <InputStory
        label="이메일"
        type="email"
        placeholder="이메일을 입력하세요"
        initialValue="user@vingle.com"
      />

      <InputStory
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력하세요"
        initialValue="password123"
      />

      <InputStory
        label="숫자"
        type="number"
        placeholder="숫자를 입력하세요"
        initialValue="25"
      />

      <InputStory
        label="검색"
        type="search"
        placeholder="검색어를 입력하세요"
        initialValue="검색어"
      />
      <InputStory
        label="전화번호"
        type="tel"
        placeholder="전화번호를 입력하세요"
        initialValue="010-1234-5678"
      />

      <InputStory
        label="URL"
        type="url"
        placeholder="URL을 입력하세요"
        initialValue="https://vingle.com"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'VINGLE 디자인 시스템에서 지원하는 모든 Input 타입을 한번에 확인할 수 있습니다.',
      },
    },
  },
};
