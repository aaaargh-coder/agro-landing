import React from 'react'

const prefix = '-' + ((Math.random() * 1e15) | 0).toString(36)
const waveClassName = 'wave' + prefix
const styleTagId = 'waveAnimation' + prefix

let done = false;
const createStyleTag = (animationDuration) => {
  if (!done) {
    const styleTag = document.createElement(`style`)

    styleTag.innerHTML = `
      @keyframes ${styleTagId} {
        from { 
          opacity: 0.2;
          transform: scale(0);
        }
        to { 
          opacity: 0;
          transform: scale(3);
        }
      }
      .${waveClassName} {
        animation: ${styleTagId} ${animationDuration}ms;
      }
    `
    document.head.appendChild(styleTag);
    done = true;
  }
}

export function useClickWaveAnimation(
  options = {},
) {
  const { animationDuration = 1200 } = options

  const ref = React.useRef(null)

  React.useLayoutEffect(() => {
    const button = ref.current

    createStyleTag(animationDuration)

    if (button) {
      button.style.position = 'relative';
      button.style.overflow = 'hidden';

      button.addEventListener('mousedown', function (e) {
        const waveOffset = this.getBoundingClientRect()
        const wave = document.createElement('div')

        const waveSize = waveOffset.width > waveOffset.height ? waveOffset.width : waveOffset.height;
     
        const waveY = e.clientY - waveOffset.top - waveSize / 2;
        const waveX = e.clientX - waveOffset.left - waveSize / 2;

        wave.style.top = waveY + 'px';
        wave.style.left = waveX + 'px';
        wave.style.position = 'absolute';
        wave.style.height = waveSize + 'px';
        wave.style.width = waveSize + 'px';
        wave.style.borderRadius = '50%';
        wave.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

        wave.classList.add(waveClassName)

        wave.addEventListener('animationend', () => this.removeChild(wave))
        this.appendChild(wave)
      })
    }
  }, [])

  return ref
}
