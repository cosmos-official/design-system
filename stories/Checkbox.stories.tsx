import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '@/packages';
import { useState } from 'react';

const meta = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# VINGLE Design System - Checkbox

VINGLE 디자인 시스템의 Checkbox 컴포넌트입니다. HTML checkbox 요소의 모든 속성을 지원하며, 접근성과 사용성을 고려하여 설계되었습니다.

## 특징

- **완전한 HTML Checkbox 속성 지원**: 모든 HTML checkbox 속성을 props로 전달 가능
- **TypeScript 지원**: 완전한 타입 안전성 제공
- **접근성 고려**: ARIA 속성 및 키보드 네비게이션 지원
- **커스텀 스타일**: 브랜드에 맞는 디자인
- **라벨 지원**: 체크박스와 함께 라벨 표시
- **다양한 상태 지원**: 기본, 비활성화, 고정 상태

## 사용법

\`\`\`tsx
import Checkbox from '@vingle/design-system/Checkbox';

// 기본 사용법
<Checkbox 
  checked={isChecked} 
  onChange={setIsChecked} 
/>

// 라벨과 함께 사용
<Checkbox 
  checked={isChecked} 
  onChange={setIsChecked}
  label="이용약관에 동의합니다" 
/>

// 비활성화 상태
<Checkbox 
  checked={isChecked} 
  onChange={setIsChecked}
  disabled 
/>

// 고정 상태 (항상 체크된 상태로 표시)
<Checkbox 
  checked={isChecked} 
  onChange={setIsChecked}
  fixed 
/>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | - | 체크박스 상태 (필수) |
| onChange | (checked: boolean) => void | - | 상태 변경 핸들러 (필수) |
| label | string | - | 체크박스 라벨 |
| disabled | boolean | false | 비활성화 여부 |
| fixed | boolean | false | 고정 상태 (항상 체크된 상태로 표시) |
| ... | InputHTMLAttributes | - | 모든 HTML checkbox 속성 지원 |
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    return (
      <Checkbox checked={checked} onChange={handleChange} label="체크박스" />
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    return <Checkbox checked onChange={handleChange} label="체크박스" />;
  },
};

export const Disabled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    return (
      <Checkbox
        checked={checked}
        disabled
        onChange={handleChange}
        label="체크박스"
      />
    );
  },
};

export const Fixed: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    return (
      <Checkbox
        checked={checked}
        fixed
        onChange={handleChange}
        label="체크박스"
      />
    );
  },
};
