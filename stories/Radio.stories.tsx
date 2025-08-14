import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '@/packages';
import { useState } from 'react';

const meta = {
  title: 'Design System/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# VINGLE Design System - Radio

VINGLE 디자인 시스템의 Radio 컴포넌트입니다. HTML radio 요소의 모든 속성을 지원하며, 접근성과 사용성을 고려하여 설계되었습니다.

## 특징

- **완전한 HTML Radio 속성 지원**: 모든 HTML radio 속성을 props로 전달 가능
- **TypeScript 지원**: 완전한 타입 안전성 제공
- **접근성 고려**: ARIA 속성 및 키보드 네비게이션 지원
- **커스텀 스타일**: 브랜드에 맞는 디자인
- **라벨 지원**: 라디오 버튼과 함께 라벨 표시
- **다양한 상태 지원**: 기본, 비활성화, 고정 상태

## 사용법

\`\`\`tsx
import Radio from '@vingle/design-system/Radio';

// 기본 사용법
<Radio 
  name="options" 
  value="option1" 
  isSelected={selectedValue === 'option1'} 
  onChange={handleChange} 
/>

// 라벨과 함께 사용
<Radio 
  name="options" 
  value="option1" 
  isSelected={selectedValue === 'option1'} 
  onChange={handleChange}
  label="옵션 1" 
/>

// 비활성화 상태
<Radio 
  name="options" 
  value="option1" 
  isSelected={selectedValue === 'option1'} 
  onChange={handleChange}
  disabled 
/>

// 고정 상태
<Radio 
  name="options" 
  value="option1" 
  isSelected={selectedValue === 'option1'} 
  onChange={handleChange}
  fixed 
/>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | 라디오 그룹 이름 (필수) |
| value | string | - | 라디오 버튼 값 (필수) |
| isSelected | boolean | - | 선택 상태 (필수) |
| onChange | (e: React.ChangeEvent<HTMLInputElement>) => void | - | 상태 변경 핸들러 (필수) |
| label | string | - | 라디오 버튼 라벨 |
| disabled | boolean | false | 비활성화 여부 |
| fixed | boolean | false | 고정 상태 |
| ... | InputHTMLAttributes | - | 모든 HTML radio 속성 지원 |
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(e.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Radio
          name="options"
          value="option1"
          isSelected={selectedValue === 'option1'}
          onChange={handleChange}
          label="옵션 1"
        />
        <Radio
          name="options"
          value="option2"
          isSelected={selectedValue === 'option2'}
          onChange={handleChange}
          label="옵션 2"
        />
        <Radio
          name="options"
          value="option3"
          isSelected={selectedValue === 'option3'}
          onChange={handleChange}
          label="옵션 3"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(e.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Radio
          name="options"
          value="option1"
          isSelected={selectedValue === 'option1'}
          onChange={handleChange}
          label="옵션 1"
          disabled
        />
        <Radio
          name="options"
          value="option2"
          isSelected={selectedValue === 'option2'}
          onChange={handleChange}
          label="옵션 2"
          disabled
        />
        <Radio
          name="options"
          value="option3"
          isSelected={selectedValue === 'option3'}
          onChange={handleChange}
          label="옵션 3"
          disabled
        />
      </div>
    );
  },
};

export const Fixed: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(e.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Radio
          name="options"
          value="option1"
          isSelected={selectedValue === 'option1'}
          onChange={handleChange}
          label="옵션 1"
          fixed
        />
        <Radio
          name="options"
          value="option2"
          isSelected={selectedValue === 'option2'}
          onChange={handleChange}
          label="옵션 2"
          fixed
        />
        <Radio
          name="options"
          value="option3"
          isSelected={selectedValue === 'option3'}
          onChange={handleChange}
          label="옵션 3"
          fixed
        />
      </div>
    );
  },
};
