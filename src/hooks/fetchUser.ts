import { User } from '../utils/types/user';

import { useState, useEffect } from 'react';
import supabase from '../utils/supabase/supabase';

const useFetchUserData = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      console.log(data);
      if (data?.user) {
        setUser({
          id: data.user.id,
          email: data.user.email ?? '',
          user_metadata: {
            avatar: data.user.user_metadata.avatar,
          },
        });
      } else {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return user;
};

export default useFetchUserData;
