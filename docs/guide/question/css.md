## Scss遍历数组对象 或 数组

```css
    $sizeList: (
        (sizeName: 'xs', offset: 81.681),
        (sizeName: 'small', offset: 175.929),
        (sizeName: 'medium', offset: 257.610),
        (sizeName: 'large', offset: 534.0707)
    );
    @for $i from 1 through length($sizeList)  {
        $item: nth($sizeList, $i);
        $sizeName : map-get($map: $item, $key: sizeName );
        $offset: map-get($map: $item, $key: offset );
        &.size_#{$sizeName}{
        stroke-dashoffset: $offset;
        animation-name: dash_#{$sizeName};
        }
        //
        @keyframes dash_#{$sizeName} {
        0% {
            stroke-dashoffset: $offset;
        }
        100% {
            stroke-dashoffset: 0;
        }
        }
    }

```
