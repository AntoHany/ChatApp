function scrollToBottom(chatBox){
  if (chatBox.current){
    chatBox.current.scrollTop = chatBox.current.scrollHeight - chatBox.current.clientHeight;
  }
}
export default scrollToBottom;