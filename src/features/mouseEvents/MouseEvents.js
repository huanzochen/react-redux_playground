import { useEffect, useCallback, useState, useRef } from 'react'
import styled from 'styled-components'

const StyledMouseEvents = styled.div`
  padding: 40px;
  background-color: darkred;
`

const MouseEnter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 60px;
`

const MouseOver = styled.div`
  padding: 10px;
  background-color: darkpink;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 60px;
`

function useHookWithRefCallback() {
  const ref = useRef(null)
  const setRef = useCallback((node) => {
    const handleMouseEnterEvent = () => {
      node.text = '<div>😊</div><div>😊</div>'
      console.log('MouseOver')
    }
    const handleMouseLeaveEvent = () => {
      node.text = '<div>😤</div><div>😤</div>'
    }
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
      ref.current.removeEventListener('mouseover', handleMouseEnterEvent)
      ref.current.removeEventListener('mouseleave', handleMouseLeaveEvent)
    }
    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
      node.addEventListener('mouseover', handleMouseEnterEvent)
      node.addEventListener('mouseleave', handleMouseLeaveEvent)
    }

    // Save a reference to the node
    ref.current = node
  }, [])

  return [setRef]
}

function MouseEvents() {
  const emojiRef = useRef(null)

  useEffect(() => {
    if (emojiRef && emojiRef.current) {
      const handleMouseEnterEvent = () => {
        emojiRef.current.text = '<div>😊</div><div>😊</div>'
        // emojiRef.current.innerHTML = `
        // <div>
        // 😊
        // </div>
        // <div>
        // 😊
        // </div>
        // `
        console.log('MouseEnter')
      }
      const handleMouseLeaveEvent = () => {
        emojiRef.current.text = '<div>😤</div><div>😤</div>'
        // emojiRef.current.innerHTML = `
        // <div>
        // 😤
        // </div>
        // <div>
        // 😤
        // </div>
        // `
      }
      emojiRef.current.addEventListener('mouseenter', handleMouseEnterEvent)
      emojiRef.current.addEventListener('mouseleave', handleMouseLeaveEvent)
      return () => {
        emojiRef.current.removeEventListener('mouseenter', handleMouseEnterEvent)
        emojiRef.current.removeEventListener('mouseleave', handleMouseLeaveEvent)
      }
    }
  }, [emojiRef])

  const [emoji2Ref] = useHookWithRefCallback()

  const emoji3Ref = useRef(null)

  useEffect(() => {
    if (emoji3Ref && emoji3Ref.current) {
      const handleMouseEnterEvent = () => {
        emoji3Ref.current.text = '<div>😊</div><div>😊</div>'
        console.log('MouseOver')
      }
      const handleMouseLeaveEvent = () => {
        emoji3Ref.current.text = '<div>😤</div><div>😤</div>'
      }
      emoji3Ref.current.addEventListener('mouseover', handleMouseEnterEvent)
      emoji3Ref.current.addEventListener('mouseleave', handleMouseLeaveEvent)
      return () => {
        emoji3Ref.current.removeEventListener('mouseover', handleMouseEnterEvent)
        emoji3Ref.current.removeEventListener('mouseleave', handleMouseLeaveEvent)
      }
    }
  }, [emoji3Ref, emoji3Ref.current])

  return (
    <StyledMouseEvents>
      <div> mouseenter </div>
      <MouseEnter ref={emojiRef}>
        <div>😤</div>
        <div>😤</div>
      </MouseEnter>
      <div> mouseover </div>
      <MouseOver ref={emoji3Ref}>
        <div>😤</div>
        <div>😤</div>
      </MouseOver>
      <div> mouseoverUseCallback </div>
      <MouseOver ref={emoji2Ref}>
        <div>😤</div>
        <div>😤</div>
      </MouseOver>
    </StyledMouseEvents>
  )
}

export default MouseEvents

// issues: 不能再 ref 中使用 innerHtml, 因為不該直接修改 DOM, 其他解法待商榷
