import mitt from 'mitt'

type ApplicationEvents = {
};

export default defineNuxtPlugin(() => {
  const emitter = mitt<ApplicationEvents>()

  return {
    provide: {
      event: emitter.emit,
      listen: emitter.on,
      destroy: emitter.off
    }
  }
})
