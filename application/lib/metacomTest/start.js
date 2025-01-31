async () => {
  if (config.examples.metacom) return;
  if (application.worker.id !== 'W1') return;
  setTimeout(async () => {
    const url = 'http://127.0.0.1:8001/api';
    const metacom = metarhia.metacom.Metacom.create(url);
    setTimeout(async () => {
      await metacom.load('partner');
      const res = await metacom.api.partner.getPartnersByOffer();
      console.log({ res });
    }, 1000);
  }, 2000);
};
