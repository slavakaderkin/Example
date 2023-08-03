({
  access: 'public',

  method: async () => {
    try {
      const partners = await lib.partner.getPartners();

      return { result: partners, error: null };
    } catch (e) {
      console.error(e.message);
      return { result: null, error: e.message };
    }
  },
});
