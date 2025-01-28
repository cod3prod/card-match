# Card Match

**카드를 뒤집어 같은 카드끼리 매칭하는 간단한 게임**

## 🎯 **프로젝트 목적**

### **핵심 목표**

- **카드 셔플 알고리즘**: `Fisher-Yates Shuffle` 알고리즘을 통해 카드 배열을 무작위로 섞어 공정하고 예측 불가능한 게임을 제공합니다.
- **Memoization**: `React.memo`를 사용해 불필요한 리렌더링을 방지하여 성능을 최적화합니다.

## 🔨 **기술 스택**

- **주요 기술**: Next.js 15
- **스타일링**: Tailwind CSS

## 📝 **핵심 학습 내용**

### 1. 카드 셔플 알고리즘

`Fisher-Yates Shuffle` 알고리즘을 사용해 카드 배열을 무작위로 섞었습니다. 이로 인해 매번 새로운 게임을 시작할 때 예측 불가능한 카드 배열을 제공합니다.

```typescript
export const shuffle = (array: string[]) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const roll = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[roll];
    arr[roll] = temp;
  }
  return arr;
};
```

### 2. React.memo

`React.memo`는 React에서 컴포넌트의 메모이제이션(memoization)을 지원하는 기능으로, 같은 props가 전달되었을 때 해당 컴포넌트를 재렌더링하지 않도록 최적화합니다. 이를 통해 성능을 높이고 불필요한 렌더링을 방지할 수 있습니다.

```tsx
"use client";

import useGame from "@/hooks/use-game";
import React from "react";

const Square = React.memo(function Square({
  index,
  value,
}: {
  index: number;
  value: string | null;
}) {
  const { handlePlay } = useGame();

  return (
    <div
      className="w-full aspect-square bg-default rounded-md shadow-xs shadow-black flex justify-center items-center cursor-pointer text-4xl sm:text-6xl"
      onClick={() => handlePlay(index)}
    >
      {value}
    </div>
  );
});

Square.displayName = "Square";
export default Square;
```

## ⚙️ **프로젝트 설정**

```bash
# 패키지 설치
npm install

# 로컬 개발 환경 실행
npm run dev
```
