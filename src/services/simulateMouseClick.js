const simulateMouseClick = (element) => {
  const mouseClickEvents = ["mousedown", "click", "mouseup"];
  mouseClickEvents.forEach(
    (mouseEventType) =>
      element &&
      element.dispatchEvent(
        new MouseEvent(mouseEventType, {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1,
        })
      )
  );
};

export default simulateMouseClick;
