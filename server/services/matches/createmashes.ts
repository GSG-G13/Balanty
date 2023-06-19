export const createMatch = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { title, description, startDate, endDate, seats } = req.body;

  try {
    const match = await Match.create({
      title,
      description,
      startDate,
      endDate,
      seats,
    });

    res.status(201).json(match);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}