import { Request, Response } from 'express';
import { axiosgetAllCourses } from '../../utilities/helpers';

export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const { page, limit, sort, search } = req.query;

        // Define default values or empty strings for parameters
        const queryParams: Record<string, string | undefined> = {
            page: page as string | undefined,
            limit: limit as string | undefined,
            sort: sort as string | undefined,
        };
        
        if (search) {
            let search2 = (search as string).toLowerCase()
            queryParams.search = search2 as string;
        }

        const courseFinder = await axiosgetAllCourses(queryParams);

        if (courseFinder.data === 'not found') {
            return res.status(404).json({ status: 'error', message: 'No matching courses found' });
        }

        const courseData = courseFinder.data;
        return res.status(200).json({ status: 'success', data: courseData });
    } catch (err: any) {
        console.log(err.message);
        return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};
