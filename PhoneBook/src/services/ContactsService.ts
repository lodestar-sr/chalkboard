import { Service } from 'typedi';
import { getRepository, SelectQueryBuilder } from 'typeorm';

import { Contacts } from '../entities/Contacts';
import { IListParams, IPaginatedList } from '../shared/types/base.types';
import { OrderDirection } from '../shared/constants/global.constants';

@Service()
export default class ContactsService {
  public async create(createUserData: Partial<Contacts>): Promise<Contacts> {
    return await getRepository(Contacts).save(createUserData);
  }

  public async list(params?: IListParams): Promise<IPaginatedList> {
    const { limit, order, sortBy } = params;
    const queryBuilder = getRepository(Contacts)
      .createQueryBuilder('contacts')
      .select('contacts.*');

    const totalCount = await new SelectQueryBuilder(queryBuilder).getCount();
    const totalPages = Math.max(1, Math.ceil(totalCount / limit));
    params.page = Math.max(1, Math.min(totalPages, params.page));

    queryBuilder
      .orderBy(sortBy ? `contacts.${sortBy}` : 'contacts.id', order ? order : OrderDirection.ASC)
      .offset((+params.page - 1) * limit)
      .limit(limit);

    return {
      listData: await queryBuilder.execute(),
      sortBy,
      order,
      page: params.page,
      limit,
      totalCount,
      totalPages,
    };
  }

  public async update(id: number, updateData: Contacts) {
    return getRepository(Contacts).update(id, updateData);
  }

  public async remove(id: number) {
    return getRepository(Contacts).delete(id);
  }
}
