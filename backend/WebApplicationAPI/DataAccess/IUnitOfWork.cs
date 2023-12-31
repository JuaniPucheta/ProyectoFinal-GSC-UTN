﻿using WebApplicationAPI.DataAccess.PersonF;
using WebApplicationAPI.DataAccess.LoanF;
using WebApplicationAPI.DataAccess.CategoryF;

namespace WebApplicationAPI.DataAccess
{
    public interface IUnitOfWork
    {
        PersonRepository PersonRepository { get; }
        LoanRepository LoanRepository { get; }
        ICategoryRepository CategoryRepository { get; }
        int Complete();
    }
}
