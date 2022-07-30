import axios from 'axios';

export async function postPrepare() {
  try {
    const res = await axios.post(
        'https://a2a-api.klipwallet.com/v2/a2a/prepare',
        {
            bapp: {
                name: 'INSUtant',
            },
            type: 'auth',
        },
    );
    return res.data.request_key;
  } catch (error) {
      throw new Error(error);
  }
}

export async function getResult(requestKey) {
  try {
      const res = await axios.get(
          `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${requestKey}`,
      );
      return res.data.status === 'completed'
          ? res.data.result.klaytn_address
          : null;
  } catch (error) {
      throw new Error(error);
  }
}
