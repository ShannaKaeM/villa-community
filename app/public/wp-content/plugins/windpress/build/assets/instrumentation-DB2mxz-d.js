class Instrumentation {
  start(label) {
    performance.mark(`${label} (start)`);
  }
  end(label, detail) {
    performance.mark(`${label} (end)`);
    performance.measure(label, {
      start: `${label} (start)`,
      end: `${label} (end)`,
      detail
    });
  }
  hit(label, detail) {
    performance.mark(label, {
      detail
    });
  }
  error(error) {
    performance.mark(`(error)`, {
      detail: { error: `${error}` }
    });
    throw error;
  }
}
export {
  Instrumentation as I
};
